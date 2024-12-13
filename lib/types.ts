export interface Instance {
  id: string;
  name: string;
  phoneNumber: string;
  profilePicture: string;
  activeGroups: number;
  status: 'online' | 'offline' | 'connecting';
}

export interface Group {
  id: string;
  name: string;
  avatar: string;
  banner?: string;
  memberCount: number;
  status: 'active' | 'inactive' | 'archived';
  description?: string;
  createdAt: string;
  owner: {
    id: string;
    name: string;
    avatar: string;
  };
  subscription: {
    plan: 'basic' | 'gold' | 'diamond';
    expiresAt: string;
  };
  welcomeMessage?: string;
}

export interface Admin {
  id: string;
  name: string;
  role: 'owner' | 'admin' | 'moderator';
  avatar: string;
  addedAt: string;
}

export interface GroupSettings {
  allowMedia: boolean;
  allowPolls: boolean;
  allowLinks: boolean;
  allowNewMembers: boolean;
  messageRetention: number;
}

export interface TopUser {
  id: string;
  name: string;
  avatar: string;
  messageCount: number;
  lastActive: string;
}

export interface CommandUsage {
  command: string;
  usageCount: number;
  lastUsed: string;
}

export type PermissionGroup = 
  | 'settings'
  | 'ai'
  | 'downloads'
  | 'stickers'
  | 'basic';

export interface Permission {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  group: PermissionGroup;
}