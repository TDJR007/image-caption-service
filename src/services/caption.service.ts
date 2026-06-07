import { pipeline, ImageToTextPipeline, env } from "@huggingface/transformers";

env.localModelPath = "./models";

let captioner: ImageToTextPipeline | null = null;

const getModel = async (): Promise<ImageToTextPipeline> => {
  if (!captioner) {
    captioner = await pipeline(
      "image-to-text",
      "Xenova/vit-gpt2-image-captioning",
      { local_files_only: true }
    ) as ImageToTextPipeline;
  }
  return captioner;
};

export const generateCaption = async (imageBuffer: Buffer) => {
  const model = await getModel();
  const blob = new Blob([new Uint8Array(imageBuffer)]);
  const result = await model(blob);
  return result[0].generated_text;
};