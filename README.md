# Hyper Sync Color Scheme

A Hyper plugin to sync your color scheme with your system's appearance.

## Installation

Add `hyper-sync-color-scheme` to your `plugins` list in `~/.hyper.js`.

```js
plugins: ["hyper-sync-color-scheme"]
```

Then, hard refresh the terminal whenever the appearance changes to apply the correct theme.

## Configuration

You can configure the plugin by adding a `colorScheme` key to your `config` object in `~/.hyper.js`.

```js
config: {
  colorScheme: {
    dark: 'One Dark',
    light: 'One Light'
  }
}
```

The `colorScheme` object should contain two keys: `dark` and `light`. The values should be the names of the profiles you want to use when your system is in dark and light mode, respectively.

```js
config: {
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
