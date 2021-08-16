import html from 'innerself/index';

export default function Ingredient(ingredient, index) {
    return html`
        <li>
            <p style="color:${ingredient.color}">${ingredient.name}</p>
        </li>
    `;
}