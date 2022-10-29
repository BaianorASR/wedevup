import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render(): JSX.Element {
    return (
      <Html id="theme-root" className="dark min-h-screen transition-colors">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script></script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
