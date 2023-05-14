export type EngineCommand = {
  command: EngineCommandNames;
  payload?: string;
};

export type EngineCommandNames =
  | "fetchAnalyzedData"
  | "changeBranchOption"
  | "updatePrimaryColor";
