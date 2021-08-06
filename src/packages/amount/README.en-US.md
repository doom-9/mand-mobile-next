---
component: amount
title: Amount
preview: https://didi.github.io/mand-mobile/examples/#/amount
---

# Amount


Financial figures, generally used for amounts, quantities, etc

### Import

```javascript
import { Amount } from  'mand-mobile-next'

Vue.createApp().component(Amount.name, Amount)
```

### Tips

The font `DINPro-Medium` is used in the component for the case show only, if necessary, reset `font-family` of `.md-amount`.

### Code Examples

<demo-wrapper
  src="src/packages/amount/demo"
  :demos="demos"
/>

<script setup>
const demos = import.meta.globEager('../../../src/packages/amount/demo/demo*.vue')
</script>

<!-- DEMO -->

### API

#### Amount Props
| Props | Description | Type | Default | Note |
|----|-----|------|------|------|
|value|-|Number|`0`|-|
|precision|-|Number|`2`|length of decimal part|
|is-round-up|number round off|Boolean|`true`|-|
|has-separator|insert thousand separators|Boolean|`false`|-|
|separator|thousand separator|String|`,`|-|
|is-capital|convert to chinese capital|Boolean|`false`|-|
|transition|use transition when value changes|Boolean|`false`|-|
|duration|transition duration|Number|`1000`|unit `ms`|