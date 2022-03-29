describe('Filter logic', () => {
  describe('Array-type data', () => {
    const mockedData: string[] = [
      'test',
      '1',
      'ghj',
    ];

    test.each([
      [mockedData, 't'],
      [mockedData, 'g'],
      [mockedData, '1'],
    ])('expect %s toContain element with "%s"', (searchedData: string[], searchableValue: string) => {
      const result: string[] = searchedData.filter(
        (item: string): boolean => item.includes(searchableValue),
      );

      expect(result).not.toBe([]);
    });
  });
  describe('JSON-type data', () => {
    interface mockedInterface {
      id: number
      title: string
      category: string
      status: 'opened' | 'closed' | string
      date: Date
    }
    const mockedData: mockedInterface[] = [
      {
        id: 1, title: 'tes1', category: '1', date: new Date('13.12.1995'), status: 'opened',
      },
      {
        id: 2, title: 'ghs', category: '3', date: new Date('11.12.1995'), status: 'closed',
      },
    ];
    // Positive tests
    test.each([
      [mockedData, 't'],
    ])('expect %o toContain elements with "%s"', (searchedValue, searchableValue: string) => {
      const result: mockedInterface[] | [] = searchedValue.filter(
        (data: mockedInterface): boolean => Object.values(data).includes(searchableValue),
      );

      expect(result).not.toBe([]);
    });
    //  Negative tests
    test.each([
      [mockedData, '17580'],
    ])('expect %o not toContain elements with "%s"', (searchedValue, searchableValue: string) => {
      const result: mockedInterface[] | [] = searchedValue.filter(
        (data: mockedInterface): boolean => Object.values(data).includes(searchableValue),
      );

      expect(result).toStrictEqual([]);
    });
  });
});
