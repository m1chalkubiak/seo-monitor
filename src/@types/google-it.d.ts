declare module 'google-it' {
  declare function googleIt(arguments: {
    query?: string | null;
    'only-urls'?: boolean;
    'no-display'?: boolean;
    options?: {
      proxy?: string;
    };
  }): Promise<
    Array<{
      title?: string;
      link: string;
      snippet?: string;
    }>
  >;

  export = googleIt;
}
