<!--
 * @Author: lpz1096
 * @Date: 2021-09-04 11:23:19
 * @LastEditors: lpz1096
 * @LastEditTime: 2021-09-06 19:53:25
 * @Description:vue3 barcode
-->
<script>
import JsBarcode from 'jsbarcode'
import { defineComponent, onMounted, ref, watch, h } from 'vue'
export default defineComponent({
  name: 'vue3Barcode',
  props: {
    value: {
      type: [String, Number],
      default: '',
    },
    format: [String],
    width: [String, Number],
    height: [String, Number],
    displayValue: {
      type: [String, Boolean],
      default: true,
    },
    text: [String, Number],
    fontOptions: [String],
    font: [String],
    textAlign: [String],
    textPosition: [String],
    textMargin: [String, Number],
    fontSize: [String, Number],
    background: [String],
    lineColor: [String],
    margin: [String, Number],
    marginTop: [String, Number],
    marginBottom: [String, Number],
    marginLeft: [String, Number],
    marginRight: [String, Number],
    flat: [Boolean],
    ean128: [String, Boolean],
    elementTag: {
      type: String,
      default: 'svg',
      validator: function (value) {
        return ['canvas', 'svg', 'img'].indexOf(value) !== -1
      },
    },
  },
  setup(props, { slots }) {
    const valid = ref(true)
    onMounted(() => {
      watch(
        props,
        (value) => {
          const settings = {
            ...value,
            valid: (validVal) => {
              valid.value = validVal
            },
          }
          removeUndefinedProps(settings)
          JsBarcode(
            document.querySelector('.vue3-barcode-element'),
            String(props.value),
            settings
          )
        },
        {
          deep: true,
          immediate: true,
        }
      )
    })
    return () =>
      h('div', [
        h(props.elementTag, {
          style: { display: valid.value ? undefined : 'none' },
          class: ['vue3-barcode-element'],
        }),
        h(
          'div',
          {
            style: { display: valid.value ? 'none' : undefined },
          },
          slots
        ),
      ])
  },
})
function removeUndefinedProps(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop) && obj[prop] === undefined) {
      delete obj[prop]
    }
  }
}
</script>
