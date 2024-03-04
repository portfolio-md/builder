export interface Renderer {
  render(file: Buffer): Promise<Buffer>;
}
