📢 Use this project, [contribute](https://github.com/vtex-apps/iubenda-components) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).

# Iubenda components

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-0-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

Add [Iubenda](https://github.com/vtex-apps/iubenda) necessary components to your store theme:

- `advertising-tracking-preferences`: Let your visitors update their advertising tracking preferences even after closing the cookie banner. [Read more](https://www.iubenda.com/en/help/7440-iab-framework-cmp#update-tcf-preferences).

![image](https://user-images.githubusercontent.com/284515/80037044-46d6da00-84c9-11ea-9ad2-5f0a357e5fe5.png)

## Configuration

1. Add the Iubenda components's app to your theme's dependencies in the `manifest.json`, for example:

```json
  dependencies: {
    "vtex.iubenda-components": "0.x"
  }
```

2. Add the `advertising-tracking-preferences` block, usually placed on the footer. For example:

```diff
   "footer": {
     "children": [
+      "advertising-tracking-preferences"
     ]
   },
```

## Customization

In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).

| CSS Handles                      |
| -------------------------------- |
| `advertisingTrackingPreferences` |

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
