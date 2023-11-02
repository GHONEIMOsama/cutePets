export function fetchAllData() {
    return fetch('https://api.thedogapi.com/v1/images/search?has_breeds=1&api_key=live_kwHlZtE6b1vHgLuVMbDDx2STtQm44tSJu3pmIJRO2STUJoy3IS7uiab0nzHa36gA&limit=20').then(res => {
        return res.json();
    });
}