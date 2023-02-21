📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Quick Order

![All Contributors](https://img.shields.io/badge/all_contributors-1-green.svg?style=flat-square)



This component will make a quick order by entering the SKU number of a product.


<img  alt="image" src="https://res.cloudinary.com/dafsjo7al/image/upload/v1677008090/sku_r6owq3.png">

## Configuration 

1. Import the Quick Order app to your theme's dependencies in the manifest.json, for example:
```json
  "dependencies": {
    "{vendor}.quick-order": "0.x"
  }
 ```
 
 2. Add the quick-order block to the store-theme. for example:
```json
 {
  {
  "flex-layout.row#quick-order": {
    "title": "Custom Quick Order",
    "children": [
      "quick-order"
     ]
    }
  }
}
   ```

|  Block name     | Description                                     |
| -------------- | ----------------------------------------------- |
| `quick-order` | ![https://img.shields.io/badge/-Mandatory-red](https://img.shields.io/badge/-Mandatory-red)  Top level block that must be declared in the store theme block to render a quick order block. 

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

|CSS HANDLES |
| ----------- | 
|` input__quick `|
|` container__quick `|


<!-- DOCS-IGNORE:start -->

## Contributors ✨

SEBASTIAN MENA
<!-- DOCS-IGNORE:end -->

---- 

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)
- [Condition Layout](https://vtex.io/docs/components/all/vtex.condition-layout@1.1.6/)
- [Add To Cart Button](https://vtex.io/docs/components/content-blocks/vtex.add-to-cart-button@0.9.0/)
- [Store Form](https://vtex.io/docs/components/all/vtex.store-form@0.3.4/)
