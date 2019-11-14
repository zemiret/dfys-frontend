import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

export class SubscriptionHandler implements OnDestroy {
  private subscriptions: Subscription[] = [];

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  protected addSubscription(sub: Subscription) {
    this.subscriptions.push(sub);
  }
}
