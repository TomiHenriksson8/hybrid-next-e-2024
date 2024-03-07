import {fetchMediaById} from "@/models/mediaModel"
import Image from "next/image";

export default  async function Single({ params }: { params: { id: string } }) {
    const mediaItems = await fetchMediaById(Number(params.id));
    
    if (!mediaItems) {
      return <p>No media found</p>;
    }

    return (
        <div>
            <h1>{mediaItems.title}</h1>
            <p>Description: {mediaItems.description}</p>
            <p>Date: {new Date(mediaItems.created_at).toLocaleDateString('fi-FI')}</p>
            <Image src={mediaItems.thumbnail} alt={mediaItems.title} width={320} height={200} />
        </div>
    )
  }