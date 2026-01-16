
export enum GameEdition {
  JAVA = 'Java Edition',
  BEDROCK = 'Bedrock Edition'
}

export enum ExecutionTarget {
  CHAT = 'Chat/Terminal',
  BLOCK = 'Command Block'
}

export interface AdvancedOptions {
  complexity: 'simple' | 'advanced' | 'ultra';
  targetSelector: string;
  includeNBT: boolean;
  executionTarget: ExecutionTarget;
}

export interface CommandResponse {
  command: string;
  explanation: string;
  versionCompatible: string;
  warnings?: string[];
}

export interface HistoryItem {
  id: string;
  prompt: string;
  response: CommandResponse;
  edition: GameEdition;
  timestamp: number;
}
