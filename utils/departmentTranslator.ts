type Department = "SERVICE" | "GA" | "BUSINESS" | "STRATEGY" | "PRODUCT" | undefined | null;
export default function depTranslator ({dep}: { dep: Department }) {
    const translations = {
        "SERVICE": "서본",
        "GA": "GA팀",
        "BUSINESS": "비본",
        "STRATEGY": "전략기획",
        "PRODUCT": "제품팀",
    };

    return dep? translations[dep] :"Unknown";
}