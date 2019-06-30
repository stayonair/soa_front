<template>
  <div class="post__wrapper">
    <div class="post__container">
      <div class="post">
        <post-thumbnail
          :post="post"
          class="post__thumbnail"
        />
        <figure class="post__audio">
          <audio
            class="audio"
            controls
            preload="auto"
            src="http://www.voice-pro.jp/announce/mp3/001-sibutomo.mp3"
          >
            <code>audio</code> element
          </audio>
        </figure>
        <div class="post__article">
          <p v-html="post.article" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PostThumbnail from '~/components/Molecules/PostThumbnail'

export default {
  name: 'Post',
  layout: 'user',
  components: {
    PostThumbnail
  },
  computed: {
    ...mapState({
      post: store => store.post.post
    }),
    getParams() {
      return this.$route.params.id
    }
  }
}
</script>

<style lang="scss" scoped>
.post__container {
  background-color: $color-white;
}

.post__thumbnail /deep/{
  margin-bottom: 3rem;

  .post_thumbnail__header__wrapper {
    padding: 8rem 10rem;

    @include tablet() {
      padding: 5rem;
    }
    @include mobile() {
      padding: 3rem 1rem 2rem; 
    }

    .post_thumbnail__header__container {
      padding: 1rem 5rem;

      @include tablet() {
        padding: 0;
      }
      @include mobile() {
        padding: 0;
      }

      .post_thumbnail__header {
        &__title {
          margin-bottom: 5rem;
        }

        &__tags {
          margin-bottom: 1rem;
        }

        @include mobile() {
          &__title {
            font-size: 2.5rem;
          }
        }
      }
    }
  }
}

.post__audio {
  margin-bottom: 2rem;
  text-align: center;

  .audio {
    width: 90%;
  }
}

.post__article {
  padding: 0 5rem;
  font-size: 1.4rem;
  line-height: 3rem;
}
</style>