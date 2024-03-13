import { UploadingPicture } from "./UploadingPicture";
import { RegisterInput } from "./RegisterInput";

export const RegisterForm = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <UploadingPicture />
        <RegisterInput />
      </div>
    </>
  );
};
