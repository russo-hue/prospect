import type { MetadataRoute } from "next";
export const dynamic = "force-static";
export default function manifest():MetadataRoute.Manifest{return{name:"Prospect PF",short_name:"Prospect PF",description:"Sistema de captação de veículos",start_url:process.env.GITHUB_PAGES==="true"?"/prospect/":"/",display:"standalone",background_color:"#070b19",theme_color:"#070b19",lang:"pt-BR"}}
