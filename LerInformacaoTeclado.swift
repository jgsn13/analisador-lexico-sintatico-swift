let dadosArquivo = FileHandle.standardInput.availableData
let arquivoStr = String(data: dadosArquivo, encoding: .utf8)?.trimmingCharacters(in: .newlines)
