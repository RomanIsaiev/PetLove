import { toast } from "react-toastify";
import { instance } from "../../axios";

export const editProfile = async (data) => {
  try {
    const response = await instance.patch(`/users/current/edit`, data);
    toast.success("Profile updated successfully!");
    return response;
  } catch (error) {
    if (error.response) {
      switch (error.response.status) {
        case 400:
          toast.error(
            "Invalid input. Please check your details and try again."
          );
          break;
        case 401:
          toast.error("Unauthorized access. Please log in and try again.");
          break;
        case 403:
          toast.error("You do not have permission to edit this profile.");
          break;
        case 404:
          toast.error(
            "The profile service is temporarily unavailable. Please try again later."
          );
          break;
        case 429:
          toast.error("Too many requests. Please try again after some time.");
          break;
        case 500:
          toast.error("Server error. Please try again later.");
          break;
        default:
          toast.error("An error occurred. Please try again.");
      }
    } else if (error.request) {
      toast.error(
        "Cannot reach the server. Please check your internet connection and try again."
      );
    } else {
      toast.error(
        "An error occurred while updating the profile. Please try again."
      );
    }
  }
};
