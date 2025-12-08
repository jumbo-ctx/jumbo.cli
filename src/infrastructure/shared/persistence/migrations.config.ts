/**
 * Centralized migrations configuration for all namespaces.
 *
 * This module provides a factory function to generate migration paths
 * relative to the infrastructure directory. Used by both bootstrap.ts
 * (for existing projects) and SqliteConnectionManager (for new databases).
 */

import path from "path";

/**
 * Configuration for namespace-based migrations.
 * Each entry specifies a namespace and the path to its migration files.
 */
export interface NamespaceMigration {
  namespace: string;
  path: string;
}

/**
 * Returns all namespace migrations with paths resolved relative to
 * the provided infrastructure directory.
 */
export function getNamespaceMigrations(infrastructureDir: string): NamespaceMigration[] {
  return [
    // Work category
    { namespace: "work/sessions", path: path.join(infrastructureDir, "work/sessions/migrations") },
    { namespace: "work/goals", path: path.join(infrastructureDir, "work/goals/migrations") },
    // Solution category
    { namespace: "solution/decisions", path: path.join(infrastructureDir, "solution/decisions/migrations") },
    { namespace: "solution/architecture", path: path.join(infrastructureDir, "solution/architecture/migrations") },
    { namespace: "solution/components", path: path.join(infrastructureDir, "solution/components/migrations") },
    { namespace: "solution/dependencies", path: path.join(infrastructureDir, "solution/dependencies/migrations") },
    { namespace: "solution/guidelines", path: path.join(infrastructureDir, "solution/guidelines/migrations") },
    { namespace: "solution/invariants", path: path.join(infrastructureDir, "solution/invariants/migrations") },
    // Project knowledge category
    { namespace: "project-knowledge/project", path: path.join(infrastructureDir, "project-knowledge/project/migrations") },
    { namespace: "project-knowledge/audiences", path: path.join(infrastructureDir, "project-knowledge/audiences/migrations") },
    { namespace: "project-knowledge/audience-pains", path: path.join(infrastructureDir, "project-knowledge/audience-pains/migrations") },
    { namespace: "project-knowledge/value-propositions", path: path.join(infrastructureDir, "project-knowledge/value-propositions/migrations") },
    // Relations category
    { namespace: "relations", path: path.join(infrastructureDir, "relations/migrations") },
  ];
}
