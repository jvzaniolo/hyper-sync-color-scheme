# Hyper Sync Color Scheme

A Hyper plugin to sync your color scheme with your system's appearance.

## Installation

Install the plugin with the following command:

```bash
hyper i hyper-sync-color-scheme
```

Then, whenever you change your system's appearance, hard reload Hyper to apply the new color scheme.

## Configuration

You can configure the plugin by adding a `colorScheme` key to your `config` object in `~/.hyper.js`.

```js
config: {
  colorScheme: {
    dark: 'One Dark',
    light: 'One Light'
  },
  profiles: []
}
```

The `colorScheme` object should contain two keys: `dark` and `light`. The values should be the names of the profiles you want to use when your system is in dark and light mode, respectively.

```js
config: {
  colorScheme: {
    dark: 'One Dark',
    light: 'One Light'
  },
  profiles: [
    {
      name: "One Dark",
      colors: {
        // ...
      },
    },
    {
      name: "One Light",
      colors: {
        // ...
      },
    },
  ];
}
```

## License

MIT
