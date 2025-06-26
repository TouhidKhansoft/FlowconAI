# Clean Code Guidelines

## IMPORTANT: Apply These Laws to Every Line of Code

**YOU MUST** treat each principle marked as **LAW** as non-negotiable. Apply them when writing new code AND when touching existing code. Small, continuous improvements keep the codebase healthy.

## Naming & Intent

### LAW: Intent-Revealing Names
- Names must fully convey purpose without comments
- NO cryptic abbreviations, prefixes, or meaningless words
- Classes → nouns, Functions → verbs
- **ALWAYS** rename unclear names immediately - long names > vague names

```
// BAD: d = getCurrentTime()
// GOOD: currentTimestamp = getCurrentTime()

// BAD: calc(x, y) 
// GOOD: calculateTotalPrice(basePrice, taxRate)
```

## Functions & Methods

### LAW: Single-Purpose Functions
- **MUST** do ONE logical action at ONE abstraction level
- **PREFER** short functions but prioritize clarity over arbitrary limits
- Complex algorithms may require more lines - that's acceptable
- Extract when you see "first... then..." comments
- Use guard clauses for early exit

```
// GOOD: Guard clause pattern
function processOrder(order):
  if order is invalid: return error
  if order is empty: return success
  
  // Happy path logic here
  result = executeOrder(order)
  return result
```

### LAW: Minimal Parameters
- 0-1 parameters ideal
- 2 parameters acceptable
- 3+ parameters = Consider refactoring to object/structure
- **AVOID** boolean flags as parameters - use enums or separate methods

```
// BAD: createUser(name, email, age, isAdmin, sendWelcome)
// GOOD: createUser(userDetails)
// GOOD: createUser(name, email) + separate setUserRole(userId, role)
```

### LAW: Command-Query Separation
- Queries return data, NO side effects
- Commands change state, return void/status
- **NEVER** mix (no calculateAndStore operations)

## Code Structure & Flow

### LAW: Readable Control Flow
- Conditionals must read like natural language
- Extract complex boolean logic to well-named predicates
- Deeply nested code is a smell - consider extracting or restructuring

```
// BAD: if (!disabled && age >= MIN_AGE && verified && !suspended)
// GOOD: if canPerformAction()
```

### LAW: Clean Error Handling
- Validate inputs at system boundaries
- Fail fast with descriptive error messages
- Keep happy path uncluttered
- Error handling should not dominate the code visually

```
// GOOD: Happy path dominates
function processPayment(payment):
  validatePayment(payment)  // Throws if invalid
  
  transaction = prepareTransaction(payment)
  result = executeTransaction(transaction)
  logTransaction(result)
  
  return result
```

## Classes & Architecture

### LAW: Single Responsibility
- ONE reason to change per class/module
- Cohesive public interface
- Hide implementation details
- Separate orchestration from data/logic

### LAW: Dependency Inversion
- High-level modules independent of low-level modules
- Both depend on abstractions
- **ALWAYS** inject dependencies - avoid hardcoded instantiation
- **NEVER** create dependencies inside business logic

```
// GOOD: Dependency injection
class OrderService:
  constructor(paymentGateway, inventoryService):
    this.gateway = paymentGateway
    this.inventory = inventoryService
```

### LAW: Favor Composition Over Conditionals
- Replace type-checking switches with polymorphism where sensible
- Use strategy pattern for varying algorithms
- But don't over-engineer simple cases

## Quality & Testing

### LAW: Test-Driven Mindset
- Write testable code even if not doing strict TDD
- Tests verify behavior, NOT implementation details
- Fast tests encourage frequent runs
- Isolate external dependencies

### LAW: Comments Explain WHY, Not WHAT
- Code must be self-documenting for WHAT it does
- Comments only for:
  - Business logic rationale
  - Workarounds with context
  - Performance optimizations
  - Complex algorithm references
- **DELETE** redundant comments on sight

```
// BAD: // Increment counter
counter++

// GOOD: // Offset required due to legacy timezone handling
adjustedTime = time + LEGACY_OFFSET

// GOOD: // Using Boyer-Moore for O(n/m) search performance
position = boyerMooreSearch(text, pattern)
```

## Continuous Improvement

### LAW: Boy Scout Rule
- **ALWAYS** leave code cleaner than you found it
- Each commit should include at least one improvement:
  - Better variable name
  - Extracted function
  - Removed dead code
  - Clearer structure

### LAW: Fast Feedback
- Automated checks should run quickly
- Local verification before pushing
- CI/CD pipeline provides rapid validation

## Module & System Design

### LAW: Clear Module Boundaries
- Modules expose minimal, stable interfaces
- Data crosses boundaries as simple structures
- **NEVER** leak implementation details

### LAW: Consistent Structure
- Follow project conventions consistently
- Standard file organization aids navigation
- Similar things should look similar

## Pragmatic Application

### REMEMBER: Context Matters
- **Performance-critical code**: May need optimization over ideal structure
- **Simple scripts**: Don't over-engineer
- **Complex domains**: May require larger functions for clarity
- **Legacy systems**: Incremental improvement over perfection

### Balance These Tensions:
- Clarity vs. Brevity
- Flexibility vs. Simplicity  
- Ideal design vs. Delivery deadlines
- Current patterns vs. Better patterns

## YOU MUST Remember

✅ **Every name reveals intent** - No explanatory comments needed  
✅ **Functions do one thing** - But "one thing" can be complex  
✅ **Minimize parameters** - Group related data sensibly  
✅ **Separate queries from commands** - No surprise side effects  
✅ **Validate at boundaries** - Then trust internal code  
✅ **One reason to change** - Per class/module/component  
✅ **Inject dependencies** - Enable testing and flexibility  
✅ **Strategic use of patterns** - Not everywhere, but where valuable  
✅ **Behavior-focused tests** - Implementation can change  
✅ **Comments explain WHY** - Code shows WHAT and HOW  
✅ **Incremental improvement** - Perfect is enemy of better  
✅ **Consistent conventions** - Reduce cognitive load

## CRITICAL: When Writing Code

1. **Before writing**: Understand the problem and existing patterns
2. **While writing**: Apply these principles pragmatically
3. **After writing**: Review for clarity and simplicity
4. **Before committing**: Make at least one improvement

**IMPORTANT**: These are principles for maintainable code. Apply them with judgment, considering your specific context, team, and constraints. The goal is code that works, is understood, and can evolve.