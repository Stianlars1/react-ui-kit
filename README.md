# React UI Kit

A versatile React UI kit focused on delivering ready-to-use, customizable buttons for every use case. Designed to save developers time and streamline UI development, this kit offers a range of button styles and loaders, ensuring immediate integration and thematic coherence across projects.

**Check out the [website](https://react-ui-kit.dev) for demo's, examples, and further info.**

## Features

- **Customizable Button Components**: Easily adaptable button components for various use cases including primary, secondary, destructive, and loading states.
- **Loader Component**: A sleek loader component for indicating processing or loading states, perfectly matching the button aesthetics.
- **Ease of Use**: Designed for developers who need quick, reliable UI components without the hassle of creating them from scratch.
- **Thematic Consistency**: All components are designed with a cohesive look and feel, making it easy to maintain visual consistency throughout your application.

## Installation

Install the package using npm:

```bash
npm install @stianlarsen/react-ui-kit
```

Or using yarn:

```bash
yarn add @stianlarsen/react-ui-kit
```

## Usage

### Button

Import and use the Button component in your React project:

```jsx
import { Button } from "@stianlarsen/react-ui-kit";

function App() {
  return <Button variant="primary">Click Me</Button>;
}
```

### Loader

Import and use the Loader component to indicate loading state:

```jsx
import { Loader } from "@stianlarsen/react-ui-kit";

function App() {
  return <Loader />;
}
```

### Default CSS Variables

Add the variables below to your `global.css` ( or equivalent stylesheet ) ro customize the colors and themes.

```css
/* == light mode == **/
:root {
  --button-radius: 0.5rem;
  --button-border: 240 5.9% 90%;
  --button-padding: 0.75rem 1.25rem;
  --button-line-height: 1;

  --button-background: 0 0% 100%;
  --button-foreground: 240 10% 3.9%;

  --button-primary: 263.4 70% 50.4%;
  --button-primary-foreground: 210 20% 98%;

  --button-default: 240 5.9% 10%;
  --button-default-foreground: 0 0% 98%;

  --button-destructive: 0 72.22% 50.59%;
  --button-destructive-foreground: 0 0% 98%;

  --button-secondary: 240 4.8% 95.9%;
  --button-secondary-foreground: 240 5.9% 10%;

  --button-accent: 240 4.8% 95.9%;
  --button-accent-foreground: 240 5.9% 10%;
}

/* == dark mode == */
@media (prefers-color-scheme: dark) {
  :root {
    --button-radius: 0.5rem;
    --button-border: 240 3.7% 15.9%;

    --button-background: 240 10% 3.9%;
    --button-foreground: 0 0% 98%;

    --button-primary: 263.4 70% 50.4%;
    --button-primary-foreground: 210 20% 98%;

    --button-default: 0 0% 98%;
    --button-default-foreground: 240 5.9% 10%;

    --button-destructive: 0 62.8% 30.6%;
    --button-destructive-foreground: 0 85.7% 97.3%;

    --button-secondary: 240 3.7% 15.9%;
    --button-secondary-foreground: 0 0% 98%;

    --button-accent: 240 3.7% 15.9%;
    --button-accent-foreground: 0 0% 98%;
  }
}
```

### Customizing Styles with CSS Variables

Our components use HSL color values for easy customization of themes. When overriding the CSS variables for colors, please provide values in HSL format to ensure compatibility.

Example of customizing the primary button color in HSL:

#### How to Customize

To customize these styles, simply redefine the CSS variables in your project's `global.css` or equivalent stylesheet:

```css
:root {
  --button-primary: 25 100% 50%;
}
```

Our button uses these values ( variables ) like this

```css
.button-primary {
  background-color: hsl(var(--button-primary));
}
```

By leveraging CSS variables, the React UI Kit ensures you can easily theme your components to fit the look and feel of your application, all while maintaining the ease of use and flexibility that comes with CSS customization.

### Applying the Variables

The button component is already using the variables mentioned above, so you only need to change the hsl values to your liking.

## Contributing

Contributions are always welcome! Please contact me for further info.

## License

`@stianlarsen/react-ui-kit` is [MIT licensed](./LICENSE).

## Contact

For any questions or suggestions, feel free to reach out.

- GitHub: [@stianlars1](https://github.com/stianlars1)
- Website: [https://stianlarsen.com](https://stianlarsen.com)
- Email [stian.larsen@mac.com](mailto:stian.larsen@mac.com)
