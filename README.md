# minimal-api

## To download the weights:

```js
node -e "
import('@huggingface/transformers').then(({pipeline}) => 
  pipeline('image-to-text', 'Xenova/vit-gpt2-image-captioning', {cache_dir: './models'})
)"
```