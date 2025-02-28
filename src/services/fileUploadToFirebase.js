import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../config/firebase";

export const UploadFileToFirebase = async (
  file,
  folder = "images",
  setProgress
) => {
  if (!file) return null;

  try {
    const storageRef = ref(storage, `${folder}/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(progress);
        },
        (error) => {
          console.error("❌:", error);
          reject(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log("✅:", downloadURL);
          resolve(downloadURL);
        }
      );
    });
  } catch (error) {
    console.error("Yükleme hatası:", error);
  }
};
