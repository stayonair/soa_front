<template>
  <div class="post__wrapper">
    <icon-loading
      v-if="isLoading"
      class="loading_icon"
    />
    <div
      v-for="(post, key) in feedPosts"
      :key="key"
      class="post__container"
    >
      <post-thumbnail
        class="post"
        :post="post"
        @click="goToPostPage(post.id)"
      />
      <div class="post_profile__container">
        <post-profile
          :icon-url="post.author.icon_url"
          :name="post.author.name"
          :posted-at="post.posted_at"
        />
        <div class="icon_wrapper__container">
          <icon-wrapper
            class="icon_heart__container"
            :label="post.likes.length"
            @click="postLike(isLike(post.likes, user), post.id, user)"
          >
            <icon-heart
              class="icon_heart"
              :class="{'icon_heart--active': isLike(post.likes, user)}"
            />
          </icon-wrapper>
          <icon-wrapper
            class="icon_star__container"
            @click="addFavorite"
          >
            <icon-star
              class="icon_star"
              :class="{'icon_star--active': isFavorite()}"
            />
          </icon-wrapper>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import firebase, { db } from '~/plugins/firebase'
import PostProfile from '~/components/Atoms/PostProfile'
import IconLoading from '~/components/Atoms/Icons/IconLoading'
import PostThumbnail from '~/components/Molecules/PostThumbnail'
import IconWrapper from '~/components/Atoms/IconWrapper'
import IconHeart from '~/components/Atoms/Icons/IconHeart'
import IconStar from '~/components/Atoms/Icons/IconStar'


const postsCollection = db.collection('posts')

export default {
  name: 'NewsFeed',
  layout: 'user',
  components: {
    PostProfile,
    IconLoading,
    PostThumbnail,
    IconWrapper,
    IconHeart,
    IconStar
  },
  data:() => ({
    isLoading: false,
    isDisabled: false
  }),
  computed: {
    ...mapState({
      feedPosts: store => store.post.posts,
      user: store => store.auth.user
    }),
  },
  async created() {
    this.isLoading = true
    if (this.isDisabled) {
      return
    }
    this.isDisabled = true
    await this.initPosts()
    this.isLoading = false
    this.isDisabled = false
  },
  methods: {
    ...mapActions('post', ['initPosts']),
    goToPostPage(id) {
      this.$router.push({ path: `posts/${id}` })
    },
    isLike(likes, user) {
      if (!user) {
        return false
      }
      return likes.some(_uid => {
        return user.uid === _uid
      })
    },
    isFavorite() {
      // お気に入りかどうか
      return false
    },
    postLike(isLike, postId, user) {
      if (!user) {
        // modal 出す
        return
      }
      if (isLike) {
        postsCollection.doc(postId).update({
        likes: firebase.firestore.FieldValue.arrayRemove(user.uid)
      })
        return
      }

      postsCollection.doc(postId).update({
        likes: firebase.firestore.FieldValue.arrayUnion(user.uid)
      })
    },
    addFavorite() {
      console.log('add favorite')
    }
  }
}
</script>

<style lang="scss" scoped>
.post__container {
  background: $color-white;
  margin-bottom: 2rem;
  border-bottom: 0.1rem solid #{$color-gray}33;

  .post {
    width: 100%;
    height: auto;
    max-width: 50rem;
    max-height: 30rem;
    margin: 0 auto;
    box-shadow: inset 0 0 0 25rem rgba(0, 30, 40, 0.6);
    transition: all 0.4s;

      &:hover {
        opacity: 0.8;
        transform: scale(0.99, 0.99);
      }
  }

  &:not(:last-child) {
    margin-bottom: 1rem;
  }

}

.post_profile__container {
  display: flex;
  justify-content: space-between;
  padding: 0 32rem;
  margin-bottom: 2rem;

  @include mobile() {
    padding: 0 2rem;
    margin-bottom: 1rem
  }
}

.icon_wrapper__container {
    display: flex;
  }

.icon_heart__container {
  display: flex;
  align-items: center;
}

.icon_heart {
  &--active {
    fill: $color-pink;
  }
}

.icon_star {
  width: 2.4rem;
  /deep/ {
    .icon--star--outline {
      fill: $color-yellow;
    }
  }

  &--active {
    fill: $color-yellow;
  }
}

.loading_icon {
  position: absolute;
  -webkit-animation: loading_icon 5s linear infinite;
  animation: loading_icon 5s linear infinite;
  left: 59rem;

  @include tablet() {
    left: 35.5rem;
  }

  @include mobile() {
    left: 16rem;
  }
}

@-webkit-keyframes loading_icon {
	0% { -webkit-transform: rotate(0deg); }
	100% { -webkit-transform: rotate(360deg); }
}

@keyframes loading_icon {
	0% { transform: rotate(0deg); }
	100% { transform: rotate(360deg); }
}
</style>

