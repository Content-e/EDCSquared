/* eslint-disable max-len */
export const apiInitialState = {
  isLoading: false,
  data: null,
  error: null,
  success: false,
};

export const initialAuthContext = {
  isLoggedIn: null,
  email: null,
  isVerified: null,
  userId: null,
  isLoading: false,
};

export const uuidRegex =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export enum HttpStatus {
  SUCCESS = 200,
  INTERNAL_SERVER_ERROR = 500,
}

export const ToneOptions = ["Considerate and simple"];
export const createBrand = {
  description: {
    heading: "Business description",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit ametblandit elit. In facilisis ante justo, ut posuere tellus viverra quis.Donec rutrum dapibus lorem, a ullamcorper felis ultrices nec. Sedcongue, justo quis.",
  },
  tonOfVoice: {
    heading: "Brand tone of voice",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in pretium lacus, sit amet porttitor eros. Suspendisse interdum feugiat urna, ac aliquet sem rutrum ut. Mauris mollis tincidunt nibh eu pretium. Cras tristique lobortis ante.",
  },
  brandName: {
    heading: "Whats your brand name?",
  },
};
