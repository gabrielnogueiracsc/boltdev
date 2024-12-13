// Mock data store
export const mockInstances = [
  {
    id: "1",
    name: "Sales Team",
    phoneNumber: "+1 234 567 8900",
    profilePicture: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop",
    activeGroups: 12,
    status: "online" as const,
  },
  {
    id: "2",
    name: "Support Team",
    phoneNumber: "+1 234 567 8901",
    profilePicture: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop",
    activeGroups: 8,
    status: "online" as const,
  },
  {
    id: "3",
    name: "Marketing Team",
    phoneNumber: "+1 234 567 8902",
    profilePicture: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    activeGroups: 5,
    status: "offline" as const,
  },
];

export const mockGroups = {
  "1": [
    {
      id: "1",
      name: "Product Updates",
      avatar: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=400&fit=crop",
      banner: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=1200&h=400&fit=crop",
      memberCount: 145,
      status: "active" as const,
      description: "Official channel for product updates and announcements",
      createdAt: "2024-01-15T10:00:00Z",
      owner: {
        id: "1",
        name: "John Doe",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      },
      subscription: {
        plan: "diamond" as const,
        expiresAt: "2024-12-31T23:59:59Z",
      },
      welcomeMessage: "Welcome to the Product Updates group! 👋",
    },
    {
      id: "2",
      name: "Customer Support",
      avatar: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=400&h=400&fit=crop",
      banner: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=1200&h=400&fit=crop",
      memberCount: 89,
      status: "active" as const,
      description: "24/7 customer support group",
      createdAt: "2024-01-10T08:30:00Z",
      owner: {
        id: "2",
        name: "Jane Smith",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      },
      subscription: {
        plan: "gold" as const,
        expiresAt: "2024-09-30T23:59:59Z",
      },
      welcomeMessage: "Welcome to Customer Support! How can we help you today?",
    },
    {
      id: "3",
      name: "Marketing Campaigns",
      avatar: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=400&fit=crop",
      banner: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=1200&h=400&fit=crop",
      memberCount: 56,
      status: "archived" as const,
      description: "2023 Marketing campaign coordination",
      createdAt: "2023-12-20T15:45:00Z",
      owner: {
        id: "3",
        name: "Mike Johnson",
        avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop",
      },
      subscription: {
        plan: "basic" as const,
        expiresAt: "2024-06-30T23:59:59Z",
      },
      welcomeMessage: "Welcome to the Marketing Campaigns group!",
    },
  ],
};

export const mockAdmins = [
  {
    id: "1",
    name: "John Doe",
    role: "owner" as const,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    addedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: "2",
    name: "Jane Smith",
    role: "admin" as const,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    addedAt: "2024-01-05T00:00:00Z",
  },
  {
    id: "3",
    name: "Mike Johnson",
    role: "moderator" as const,
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop",
    addedAt: "2024-01-10T00:00:00Z",
  },
];

export const mockGroupSettings = {
  allowMedia: true,
  allowPolls: true,
  allowLinks: false,
  allowNewMembers: true,
  messageRetention: 90,
};

export function getInstance(id: string) {
  return mockInstances.find(instance => instance.id === id) || mockInstances[0];
}

export function getInstanceGroups(id: string) {
  return mockGroups[id] || mockGroups["1"];
}

export function getGroup(instanceId: string, groupId: string) {
  const groups = getInstanceGroups(instanceId);
  return groups.find(group => group.id === groupId);
}