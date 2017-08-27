// place where you create types for your project to use

declare var module: {
    hot: {
        accept(path: string, callback: () => void): void
    }
}