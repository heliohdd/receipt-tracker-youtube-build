import { getTemporaryAccessToken } from "@/actions/getTemporaryAccessToken";
import SchematicEmbed from "./SchematicEmbed";

async function SchematicComponent({ componentId }: { componentId?: string }) {
  if (!componentId) {
    return null;
  }

  const accessToken = await getTemporaryAccessToken();

  //   console.log(accessToken);
  if (!accessToken) {
    throw new Error("No access token found for user");
  }

  return (
    <SchematicEmbed
      accessToken={accessToken}
      componentId={componentId}
    ></SchematicEmbed>
  );
}

export default SchematicComponent;
