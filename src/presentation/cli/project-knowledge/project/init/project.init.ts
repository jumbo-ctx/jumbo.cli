/**
 * CLI Command: jumbo project init
 *
 * Initializes a new Jumbo project by recording the initial ProjectInitialized event.
 */

import { CommandMetadata } from "../../../shared/registry/CommandMetadata.js";
import { ApplicationContainer } from "../../../../../infrastructure/composition/bootstrap.js";
import { InitializeProjectCommand } from "../../../../../application/project-knowledge/project/init/InitializeProjectCommand.js";
import { InitializeProjectCommandHandler } from "../../../../../application/project-knowledge/project/init/InitializeProjectCommandHandler.js";
import { Renderer } from "../../../shared/rendering/Renderer.js";
import { getBannerLines } from "../../../shared/components/AnimatedBanner.js";

/**
 * Command metadata for auto-registration
 */
export const metadata: CommandMetadata = {
  description: "Initialize a new Jumbo project with AI assistant hook configuration",
  category: "project-knowledge",
  requiredOptions: [
    {
      flags: "--name <name>",
      description: "Project name"
    }
  ],
  options: [
    {
      flags: "--tagline <tagline>",
      description: "Short project descriptor"
    },
    {
      flags: "--purpose <purpose>",
      description: "High-level project purpose"
    },
    {
      flags: "--boundary <boundary...>",
      description: "What's out of scope (can specify multiple)"
    }
  ],
  examples: [
    {
      command: 'jumbo project init --name "MyProject" --purpose "AI memory management"',
      description: "Initialize a new project with name and purpose"
    }
  ],
  related: ["project update"]
};

/**
 * Command handler - receives container like all other controllers
 */
export async function projectInit(
  options: {
    name: string;
    tagline?: string;
    purpose?: string;
    boundary?: string[];
  },
  container: ApplicationContainer
) {
  // Configure renderer for onboarding (always flashy/human-friendly)
  const renderer = Renderer.configure({ forceHuman: true });

  // Show welcome banner
  renderer.banner(getBannerLines());

  // Create command handler from container dependencies
  const commandHandler = new InitializeProjectCommandHandler(
    container.projectInitializedEventStore,
    container.eventBus,
    container.projectInitializedProjector,
    container.agentFileProtocol
  );

  // Execute command
  const command: InitializeProjectCommand = {
    name: options.name,
    tagline: options.tagline,
    purpose: options.purpose,
    boundaries: options.boundary,
  };

  const result = await commandHandler.execute(command, process.cwd());

  // Success output (verbose for onboarding)
  const data: Record<string, string> = {
    projectId: result.projectId,
    name: options.name,
  };
  if (options.tagline) {
    data.tagline = options.tagline;
  }
  if (options.purpose) {
    data.purpose = options.purpose;
  }

  renderer.success("Welcome to Jumbo! Project initialized successfully.", data);
  renderer.info("✓ Claude Code SessionStart hook configured (.claude/settings.json)");
  renderer.info("✓ Copilot instructions created (.github/copilot-instructions.md)");
  renderer.info("ℹ Gemini users: See AGENTS.md for manual setup instructions");
  renderer.info("");
  renderer.info("Next steps: Start a session with 'jumbo session start --focus \"<your focus>\"'");
}
