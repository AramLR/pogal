use tauri_plugin_sql::{Migration, MigrationKind};

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let migration = Migration {
        version: 1,
        description: "create_initial_tables",
        sql: "CREATE TABLE prompts (id INTEGER PRIMARY KEY, title TEXT, description TEXT, prompt TEXT);",
        kind: MigrationKind::Up
    };

    let migrations = vec![migration];

    tauri::Builder::default()
        .plugin(tauri_plugin_sql::Builder::new().build())
        .plugin(tauri_plugin_clipboard_manager::init())
        .plugin(tauri_plugin_opener::init())
        .plugin(
            tauri_plugin_sql::Builder::default()
                .add_migrations("sqlite:prompts.db", migrations)
                .build(),
        )
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
