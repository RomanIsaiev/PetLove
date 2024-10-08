import { toast } from "react-toastify";
import { instance } from "../../axios";

export const signin = async (data) => {
  try {
    const response = await instance.post(`/users/signin`, data);
    toast.success("Login successful! Redirecting to your profile...");
    return response;
  } catch (error) {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          toast.error("Invalid request. Please check your input.");
          break;
        case 401:
          toast.error("Invalid email or password. Please try again.");
          break;
        case 403:
          toast.error("Your account is blocked or does not have access.");
          break;
        case 404:
          toast.error(
            "Login service is temporarily unavailable. Please try again later."
          );
          break;
        case 429:
          toast.error(
            "Too many login attempts. Please try again in a few minutes."
          );
          break;
        case 500:
          toast.error(
            "An internal server error occurred. Please try again later."
          );
          break;
        default:
          toast.error("An error occurred. Please try again.");
      }
    } else if (error.request) {
      toast.error(
        "The server is currently unavailable. Please check your internet connection and try again."
      );
    } else {
      toast.error("An error occurred while logging in. Please try again.");
    }
  }
};
