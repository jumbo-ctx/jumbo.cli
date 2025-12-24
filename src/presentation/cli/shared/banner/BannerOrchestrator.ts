/**
 * Banner Orchestrator
 *
 * Consolidates banner display logic into a single module.
 * Detects banner scenarios and orchestrates the appropriate display.
 */

import path from "path";
import fs from "fs-extra";
import { ApplicationContainer, bootstrap } from "../../../../infrastructure/composition/bootstrap.js";
import { GetProjectSummaryQueryHandler } from "../../../../application/project-knowledge/project/query/GetProjectSummaryQueryHandler.js";
import { GetWorkSummaryQueryHandler } from "../../../../application/work/query/GetWorkSummaryQueryHandler.js";
import {
  BannerDisplayContext,
  BannerTrigger,
  generateBannerContent,
} from "../components/BannerContentGenerator.js";
import { showAnimatedBanner } from "../components/AnimatedBanner.js";
import { showWelcomeMessage } from "../components/StaticBanner.js";
import { isFirstTimeUser } from "../components/UserDetection.js";

/**
 * Banner display scenarios
 */
export type BannerScenario = "show-banner-flag" | "bare-command" | "none";

/**
 * Detects the banner scenario from command line arguments.
 *
 * @param argv - Process arguments (process.argv)
 * @returns The detected banner scenario
 */
export function detectBannerScenario(argv: string[]): BannerScenario {
  const isShowBanner = argv.includes("--show-banner");
  if (isShowBanner) {
    return "show-banner-flag";
  }

  const isNoArgs = argv.length === 2;
  const isExplicitHelp =
    (argv.includes("--help") || argv.includes("-h")) && argv.length === 3;

  if (isNoArgs && !isExplicitHelp) {
    return "bare-command";
  }

  return "none";
}

/**
 * Gathers display context for banner content generation.
 * Uses application layer queries for clean separation.
 *
 * @param container - Application container (null if project not initialized)
 * @returns Banner display context
 */
async function gatherDisplayContext(
  container: ApplicationContainer | null
): Promise<BannerDisplayContext> {
  if (!container) {
    return {
      project: null,
      work: {
        session: null,
        goals: { planned: 0, active: 0, blocked: 0, completed: 0 },
        blockers: [],
      },
    };
  }

  const projectQuery = new GetProjectSummaryQueryHandler(
    container.projectContextReader
  );
  const workQuery = new GetWorkSummaryQueryHandler(
    container.activeSessionReader,
    container.goalStatusReader
  );

  const [project, work] = await Promise.all([
    projectQuery.execute(),
    workQuery.execute(),
  ]);

  return { project, work };
}

/**
 * Orchestrates banner display based on the detected scenario.
 *
 * @param scenario - The banner scenario to handle
 * @param version - CLI version string for display
 */
export async function orchestrateBanner(
  scenario: BannerScenario,
  version: string
): Promise<void> {
  if (scenario === "none") {
    return;
  }

  const jumboRoot = path.join(process.cwd(), ".jumbo");
  const projectExists = await fs.pathExists(jumboRoot);

  // Bootstrap container if project exists
  let container: ApplicationContainer | null = null;
  if (projectExists) {
    container = bootstrap(jumboRoot);
  }

  try {
    // Gather context
    const displayContext = await gatherDisplayContext(container);
    const projectName = displayContext.project?.name ?? null;

    // Determine trigger type
    let trigger: BannerTrigger;
    if (scenario === "show-banner-flag") {
      trigger = "explicit-flag";
    } else {
      // bare-command scenario
      const firstTime = await isFirstTimeUser();
      trigger = firstTime ? "first-time" : "returning-user";
    }

    // Generate content
    const content = generateBannerContent(displayContext, trigger);

    // Display appropriate banner
    if (trigger === "first-time" && process.stdout.isTTY) {
      await showAnimatedBanner(content, projectName, version);
    } else if (scenario === "show-banner-flag" && process.stdout.isTTY) {
      await showAnimatedBanner(content, projectName, version);
    } else {
      await showWelcomeMessage(content);
    }
  } finally {
    // Clean up container resources
    if (container) {
      await container.dbConnectionManager.dispose();
    }
  }

  // Exit after banner display
  process.exit(0);
}
