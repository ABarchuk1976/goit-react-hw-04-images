export const INITIAL_STATES = {
  images: [],
  totalHits: 0,
  loading: false,
  page: 1,
  error: false,
  search: '',
};

export const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
