import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const withMDX = createMDX({
	// Add markdown plugins here, as desired
});

const nextConfig: NextConfig = {
	pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
	transpilePackages: ["@material/ui"],
};

export default withMDX(nextConfig);
