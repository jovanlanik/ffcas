function updateTheme(window)
{
	if(window.focused)
	{
		browser.theme.update(window.id,
		{
			colors:
			{
				frame: "#0c0c0c",
				button_background_active: "#c5c5c5",
				button_background_hover: "#d5d5d5",
				icons: "#0c0c0c",
				icons_attention: "#c92c66",
				tab_line: "#f5f5f5",
				tab_loading: "#163264",
				tab_text: "#0c0c0c",
				tab_background_text: "#f5f5f5",
				toolbar: "#f5f5f5",
				toolbar_bottom_separator: "#f5f5f5",
				toolbar_field: "#d5d5d5",
				toolbar_field_border: "#d5d5d5",
				toolbar_field_border_focus: "#c5c5c5",
				toolbar_field_focus: "#c5c5c5",
				toolbar_field_text: "#0c0c0c",
				toolbar_field_text_focus: "#0c0c0c",
				toolbar_field_separator: "#3a548a",
				toolbar_text: "#0c0c0c",
				toolbar_top_separator: "#0c0c0c",
				toolbar_vertical_separator: "f5f5f5"
			}
		}
		);
	}/*
	else
	{
		browser.theme.update(window.id,
		{
			colors:
			{
				frame: "#0a0e12",
				button_background_active: "#2e436e",
				button_background_hover: "#1c2943",
				icons: "#cccccc",
				icons_attention: "#2e436e",
				tab_line: "#0a0e12",
				tab_loading: "#2e436e",
				tab_text: "#cccccc",
				tab_background_text: "#2e436e",
				toolbar: "#0a0e12",
				toolbar_bottom_separator: "#0a0e12",
				toolbar_field: "#1c2943",
				toolbar_field_border: "#1c2943",
				toolbar_field_border_focus: "#2e436e",
				toolbar_field_focus: "#2e436e",
				toolbar_field_text: "#cccccc",
				toolbar_field_text_focus: "#cccccc",
				toolbar_field_separator: "#2e436e",
				toolbar_text: "#cccccc",
				toolbar_top_separator: "#0a0e12",
				toolbar_vertical_separator: "#cccccc"
			}
		});
	};*/
}

function getWindows()
{
	browser.windows.getAll().then(wins => wins.forEach(updateTheme));
}

browser.windows.onFocusChanged.addListener(getWindows);

getWindows();

