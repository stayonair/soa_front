<template>
  <div class="app_input__wrapper">
    <div class="app_input__container">
      <input
        :value="value"
        :type="inputType"
        :name="name"
        :placeholder="placeholder"
        :pattern="pattern"
        :disabled="disabled"
        :max="max"
        :min="min"
        :required="required"
        :class="{ is_error: isError }"
        class="app_input"
        @input="updateInput"
        @blur="blurInput"
      >
      <p class="app_input__inner_label">
        {{ innerLabel }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppInput',
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    inputType: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      required: true
    },
    placeholder: {
      type: [String, Number],
      default: null
    },
    pattern: {
      type: String,
      default: '.*'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    isError: {
      type: Boolean,
      default: false
    },
    min: {
      type: [String, Number],
      default: null
    },
    max: {
      type: [String, Number],
      default: null
    },
    innerLabel: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateInput(event) {
      this.$emit('input', event.target.value)
    },
    blurInput(event) {
      this.$emit('blur', event.target.value)
    }
  }
}
</script>

<style scoped lang="scss">
.app_input__container {
  position: relative;
}
.app_input {
  display: inline-block;
  width: 100%;
  margin: 0;
  padding: rem(14px) rem(24px);
  background-color: $input-bg-transparent;
  font-size: rem(14px);
  line-height: 1;
  border: none;
  border-radius: rem(24px);
  // position: relative;

  -webkit-appearance: none;
  -moz-appearance: none;
  transition: 0.2s all;

  @include placeholder(#444);

  &:hover {
    border-color: color-sub(#444, #111);
  }
  &:focus {
    border-color: color-sub(#444, #333);
    outline: 0;
  }
  &.is_error {
    &,
    &:hover,
    &:focus {
      border-color: #333;
    }
    color: #333;
  }
}

.app_input__inner_label {
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
}
</style>