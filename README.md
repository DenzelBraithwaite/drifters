# Drifters
### A Card based decision making story survival game.

<br>
<br>

**What is Drifters?**

In Drifters, you play as a nameless person with amnesia who's in an unknown world confronted by a mysterious being called Jude. Jude forces you to answer a series of questions where your decisions will change the overall impact of the game. Much of the story is shrouded in mystery and the goal is to survive long enough until you recover your memories and discover where you are. The game has a dark and mysterious feel to it and isn't intended for children. The game is currently in development but can be accessed using this link -> [Drifters](https://drifters.website) which will be available from Oct/2023 until Sept/2024. That site will hold stable beta versions of the game.

<br>

**What's the gameplay like?**

The gameplay is very simplistic, you have the main game client which will display all cards that you interact with during the game. Each card will have some sort of dialogue and you'll be able to decide between 2 different replies. Different replies will give you different dialogue, and different decisions will have an impact on your gameplay. For instance, the game consists of you trying to keep your 'stats' in good condition. Kind of like the sims, if you never go to the bathroom, you will pee on the floor. In this game however, there's no fear of peeing but you will die if any of your stats hit 0 (_with the exception of 2 stats_). The stats are revealed as you play and are determined based on your decisions.

For example, your first stat is health! But your icon that represents your health depends on your answers. Why is that important? You'll find out near the end of the game! Each decision you make will either raise or lower certain stats, so you must balance them and try to progress as far as you can. Currently, the penalty for dying has not been decided and no endings have been released, but dying will likely restart the current chapter you're on. To progress, you need to collect 'memory', which you'll gather as you continue to interact with different people. At certain levels of memory, you unlock new decks, new dialogue, and progress to further chapters.

These details are subject to change, but overall that should give you a good feel of what kind of game this is. A decision based story driven card game with an ominous setting.

<br>

**What about mobile?**

Currently, the game is unplayable on mobile because of how I handle the decisions (hover and click). But I will release a mobile version since the game was inspired by mobile games such as 'Reign'. You can however, play the game on very small computer moniters since you'd still be using a mouse. In fact, if you're feeling a little ambitious, you could try using a mouse with your phone lol, but I'm not too sure how that would go... let me know!

<br>

**Contact info**

If you want to contact me to discuss a PR or a bug or simply some ideas, you can email me using braithwaite.de@gmail.com.

<br>

**P.S.** I always appreciate those who take the time to read these, since I rarely take the time to type them! Thanks for popping in, stay awesome 😎.

<br>
<br>
___

# Svelte + TS + Vite

This template should help get you started developing with Svelte and TypeScript in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Need an official Svelte framework?

Check out [SvelteKit](https://github.com/sveltejs/kit#readme), which is also powered by Vite. Deploy anywhere with its serverless-first approach and adapt to various platforms, with out of the box support for TypeScript, SCSS, and Less, and easily-added support for mdsvex, GraphQL, PostCSS, Tailwind CSS, and more.

## Technical considerations

**Why use this over SvelteKit?**

- It brings its own routing solution which might not be preferable for some users.
- It is first and foremost a framework that just happens to use Vite under the hood, not a Vite app.

This template contains as little as possible to get started with Vite + TypeScript + Svelte, while taking into account the developer experience with regards to HMR and intellisense. It demonstrates capabilities on par with the other `create-vite` templates and is a good starting point for beginners dipping their toes into a Vite + Svelte project.

Should you later need the extended capabilities and extensibility provided by SvelteKit, the template has been structured similarly to SvelteKit so that it is easy to migrate.

**Why `global.d.ts` instead of `compilerOptions.types` inside `jsconfig.json` or `tsconfig.json`?**

Setting `compilerOptions.types` shuts out all other types not explicitly listed in the configuration. Using triple-slash references keeps the default TypeScript setting of accepting type information from the entire workspace, while also adding `svelte` and `vite/client` type information.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `allowJs` in the TS template?**

While `allowJs: false` would indeed prevent the use of `.js` files in the project, it does not prevent the use of JavaScript syntax in `.svelte` files. In addition, it would force `checkJs: false`, bringing the worst of both worlds: not being able to guarantee the entire codebase is TypeScript, and also having worse typechecking for the existing JavaScript. In addition, there are valid use cases in which a mixed codebase may be relevant.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/rixo/svelte-hmr#svelte-hmr).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```ts
// store.ts
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```
