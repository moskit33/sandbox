# Tailwind CSS Guide for Vue Project

This project uses Tailwind CSS for styling. Tailwind is a utility-first CSS framework that allows you to build designs directly in your markup.

## Setup

Tailwind has been set up in this project with the following components:

1. `tailwind.config.js` - Configuration file that controls the Tailwind build
2. `postcss.config.js` - PostCSS configuration used by Tailwind
3. Tailwind directives in `src/assets/base.css`

## How to Use Tailwind in Vue Components

### Basic Usage

Instead of writing custom CSS, use Tailwind's utility classes directly in your template:

```vue
<template>
  <div class="p-4 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4 text-gray-800">Title</h2>
    <p class="text-gray-600">Content goes here</p>
    <button
      class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
    >
      Click Me
    </button>
  </div>
</template>
```

### Template Component

We've provided a template component at `src/components/TailwindTemplate.vue` that you can copy as a starting point for new components.

### Responsive Design

Tailwind makes responsive design easy with breakpoint prefixes:

```html
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- Full width on mobile, half width on medium screens, one-third on large screens -->
</div>
```

Common breakpoints:

- `sm:` - Small screens (640px and up)
- `md:` - Medium screens (768px and up)
- `lg:` - Large screens (1024px and up)
- `xl:` - Extra large screens (1280px and up)
- `2xl:` - 2X large screens (1536px and up)

### Common Utility Classes

#### Layout

- `container`, `mx-auto` - Centered container
- `flex`, `grid` - Display modes
- `items-center`, `justify-between` - Flexbox alignment
- `space-x-4`, `space-y-4` - Spacing between children

#### Spacing

- `p-4` - Padding on all sides
- `px-4` - Horizontal padding
- `py-2` - Vertical padding
- `m-4` - Margin on all sides
- `mt-4` - Margin top

#### Typography

- `text-sm`, `text-lg`, `text-2xl` - Font sizes
- `font-bold`, `font-medium` - Font weights
- `text-center` - Text alignment
- `text-gray-500`, `text-blue-600` - Text colors

#### Backgrounds & Borders

- `bg-white`, `bg-blue-500` - Background colors
- `rounded`, `rounded-lg` - Border radius
- `border`, `border-2` - Border width
- `border-gray-200` - Border color

#### Effects

- `shadow-sm`, `shadow-md` - Box shadows
- `opacity-50` - Opacity
- `transition-colors` - Transitions

#### Interactivity

- `hover:bg-blue-700` - Hover effects
- `focus:ring` - Focus styles
- `disabled:opacity-50` - Disabled styles

## Custom Styles with @apply

If you need to add custom styles or create reusable components, you can use the `@apply` directive in a `<style>` block:

```vue
<style>
.custom-button {
  @apply px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors;
}
</style>
```

## Documentation Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)
- [Tailwind UI Components](https://tailwindui.com/components) (Paid resource)
- [Tailwind Elements](https://tailwind-elements.com/) (Free components)
