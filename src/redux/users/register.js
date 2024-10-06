import { toast } from "react-toastify";
import { instance } from "../../axios";

export const signup = async (data) => {
  try {
    const response = await instance.post(`/users/signup`, data);
    toast.success("Registration successful! Redirecting to your profile...");
    return response;
  } catch (error) {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          toast.warn("Invalid data. Please check your input and try again.");
          break;
        case 401:
          toast.warn("Authorization error. Please check your credentials.");
          break;
        case 403:
          toast.warn("You do not have permission to perform this action.");
          break;
        case 404:
          toast.warn("Server not found. Please try again later.");
          break;
        case 409:
          toast.warn("This user already exists. Please try another email.");
          break;
        case 500:
          toast.warn("Internal server error. Please try again later.");
          break;
        default:
          toast.warn("An error occurred. Please try again.");
      }
    } else if (error.request) {
      toast.warn(
        "The server is not responding. Please check your internet connection and try again."
      );
    } else {
      toast.warn(
        "An error occurred while submitting the data. Please try again."
      );
    }
  }
};
