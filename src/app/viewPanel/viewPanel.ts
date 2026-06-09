import {Component} from "@angular/core";
import {CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
    selector: 'view-panel',
    templateUrl: 'viewPanel.html',
    styleUrl: 'viewPanel.scss'
})
export class ViewPanel {
  views = [
    {
      id: 0
    },
    {
      id: 1
    },
    {
      id: 2
    },
  ];

  draggingIndex: number | null = null;
  hoveredIndex: number | null = null;
  dragTransform = '';

  private startX = 0;
  private startY = 0;
  private currentX = 0;
  private currentY = 0;

  startDrag(event: PointerEvent, index: number) {
    event.preventDefault();
    this.draggingIndex = index;

    this.startX = event.clientX;
    this.startY = event.clientY;
    this.currentX = event.clientX;
    this.currentY = event.clientY;

    window.addEventListener('pointermove', this.onPointerMove);
    window.addEventListener('pointerup', this.onPointerUp);
  }

  private getTargetIndex = (event: PointerEvent) => {
    const target = document
      .elementFromPoint(event.clientX, event.clientY)
      ?.closest<HTMLElement>('.view');

    return target != null ? Number(target?.dataset['index']) : null
  }

  private onPointerMove = (event: PointerEvent) => {
    this.currentX = event.clientX;
    this.currentY = event.clientY;

    this.hoveredIndex = this.getTargetIndex(event);

    const dx = this.currentX - this.startX;
    const dy = this.currentY - this.startY;

    this.dragTransform = `translate(${dx}px, ${dy}px)`;
  };

  private onPointerUp = (event: PointerEvent) => {
    this.hoveredIndex = null;
    if (this.draggingIndex === null) return;

    const fromIndex = this.draggingIndex;
    const toIndex = this.getTargetIndex(event) ?? fromIndex;

    if (!Number.isNaN(toIndex) && toIndex !== fromIndex) {
      const prev = this.views[toIndex];
      this.views[toIndex] = this.views[fromIndex];
      this.views[fromIndex] = prev;
    }

    this.draggingIndex = null;
    this.dragTransform = '';

    window.removeEventListener('pointermove', this.onPointerMove);
    window.removeEventListener('pointerup', this.onPointerUp);
  };
}
