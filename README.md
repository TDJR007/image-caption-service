# minimal-api

## To download the weights:

```js
node -e "
import('@huggingface/transformers').then(({pipeline}) => 
  pipeline('image-to-text', 'Xenova/vit-gpt2-image-captioning', {cache_dir: './models'})
)"
```

## To Build The Image

`docker build -t minimal-api:$(git rev-parse --short HEAD) .`

## To push Images into Github Container Registry

Refer: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry

GHCR is free for public images, and for private images you get 500MB storage + 1GB transfer free per month on the free GitHub plan. To avoid costs you may make images public.

To make an image public: 

1. GitHub → Your profile → Packages
2. Find minimal-api (or whatever image)
3. Package settings → Change visibility → Public