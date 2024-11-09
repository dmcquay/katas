export type Action = {
  name: string;
  found?: string[];
  required?: {
    items: string[];
    message: string;
  };
  response: {
    acquireItem?: string;
    moveToRoom?: string;
    message: string;
    find?: string[];
  };
};

export type Room = {
  initial: string;
  actions: Action[];
};

export type World = {
  name: string;
  firstRoom: string;
  rooms: Record<string, Room>;
};

export type RoomState = {
  found: string[];
};

export type WorldState = {
  room: string;
  items: string[];
  rooms: Record<string, RoomState>;
};

export type State = {
  currentWorld?: string;
  worlds: Record<string, WorldState>;
};
