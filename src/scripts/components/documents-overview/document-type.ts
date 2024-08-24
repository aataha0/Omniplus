export enum LeaDocumentType {
    Link, File, Video, YouTube, PDF, Word, PowerPoint, Excel
}

export function isFile(type: LeaDocumentType): boolean {
    return [LeaDocumentType.File, LeaDocumentType.PDF, LeaDocumentType.Word, LeaDocumentType.PowerPoint, LeaDocumentType.Excel].includes(type);
}
