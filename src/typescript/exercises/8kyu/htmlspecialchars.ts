//* https://www.codewars.com/kata/56bcaedfcf6b7f2125001118/train/typescript

export const htmlspecialchars = (formData: string): string  => {
    return formData
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}