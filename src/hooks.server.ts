import {
	npm_package_version,
	npm_package_devDependencies_svelte,
	npm_package_name,
	npm_package_devDependencies_typescript
} from '$env/static/private';

export const handle = async ({ event, resolve }) => {
	console.log({
		packageName: npm_package_name,
		packageVersion: npm_package_version,
		svelte: npm_package_devDependencies_svelte.split('^').join(''),
		typescript: npm_package_devDependencies_typescript.split('^').join('')
	});

	return await resolve(event);
};
