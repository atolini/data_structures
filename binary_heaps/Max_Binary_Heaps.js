class MaxBinaryHeaps {
  constructor() {
    this.data = [];
  }
  insert(element) {
    this.data.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.data.length - 1;
    let element = this.data[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.data[parentIdx];
      if (element <= parent) break;
      this.data[parentIdx] = element;
      this.data[idx] = parent;
      idx = parentIdx;
    }
    return this;
  }
  remove() {
    const removed = this.data[0];
    const last = this.data.pop();
    if (this.data.length > 0) {
      this.data[0] = last;
      this.sinkDown();
    }
    return removed;
  }
  sinkDown() {
    const length = this.data.length;
    let idx = 0;
    let element = this.data[0];

    while (true) {
      let leftIdx = 2 * idx + 1;
      let rightIdx = 2 * idx + 2;
      let swap = null;

      if (leftIdx < length) {
        let leftValue = this.data[leftIdx];
        leftValue > element ? (swap = leftIdx) : null;
      }

      if (rightIdx < length) {
        let rightValue = this.data[rightIdx];
        if (
          (swap === null && rightValue > element) ||
          (swap !== null && rightValue > element)
        ) {
          swap = rightIdx;
        }
      }
      if (swap === null) break;
      this.data[idx] = this.data[swap];
      this.data[swap] = element;
      idx = swap;
    }
  }
}

const heap = new MaxBinaryHeaps();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
