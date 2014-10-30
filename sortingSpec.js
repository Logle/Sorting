// writing tests for sorting

describe("bubble_sort", function() {
  it("sort an array using bubble method", function() {
    expect(bubble_sort([6,5,4,3,2])).toEqual([2,3,4,5,6]);
  });
  it("works with an array of one element", function() {
    expect(bubble_sort([6])).toEqual([6]);
  });
});


describe("merge_sort", function() {
  it("sort an array using merge method", function() {
    expect(bubble_sort([6,5,4,3,2])).toEqual([2,3,4,5,6]);
  });
  it("works with an array of one element", function() {
    expect(bubble_sort([6])).toEqual([6]);
  });
  it("sort an array using merge method", function() {
    expect(bubble_sort([9,6,5,4,9,3,2])).toEqual([2,3,4,5,6,9,9]);
  });

});
