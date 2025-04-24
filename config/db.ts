import * as SQLite from 'expo-sqlite';

let db: SQLite.SQLiteDatabase;

export const getDatabaseInstance = (): SQLite.SQLiteDatabase => {
    if (db === null) {
        db = SQLite.openDatabaseSync('VTrackOffline.db'); // Open or create the database
    }
    return db;
};