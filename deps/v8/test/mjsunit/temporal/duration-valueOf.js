// Copyright 2021 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// Flags: --harmony-temporal

let d1 = new Temporal.Duration();
assertThrows(() => d1.valueOf(), TypeError,
    "Method Temporal.Duration called on a non-object or on a wrong type of object.");
